
import React, {Component} from 'react';
import * as THREE from 'three'
import * as TrackballControls from 'three-trackballcontrols';
import * as actions from '../../store/actions/index';
import Shell from '../../Components/Parts/Shell';
import Head from '../../Components/Parts/Head';
import Curve_nozzle from '../../Components/Parts/Curve_nozzle';
import Saddle from '../../Components/Parts/Saddle';
import Standard_nozzle from '../../Components/Parts/Standard_nozzle';

import {connect} from 'react-redux';
class Scene extends Component {
    
  state = {
    current: {},
  };
    componentDidMount() {
      const width = window.innerWidth;
      const height = window.innerHeight;
  
      //ADD CAMERA
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
      );
      this.camera.position.z = 5;
      console.log("scene rendered completely");
      //ADD SCENE
  
      //ADD RENDERER
      this.renderer = new THREE.WebGLRenderer();
      this.renderer.setSize(width, height);
      this.mount.appendChild(this.renderer.domElement);
      this.group = new THREE.Group();
        this.head_no=0;
      //ADD CUBE
  
      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
  
      this.controls.rotateSpeed = 1.0;
      this.controls.zoomSpeed = 1.2;
      this.controls.panSpeed = 0.8;
      this.controls.noZoom = false;
      this.controls.noPan = false;
      this.controls.staticMoving = true;
      this.controls.dynamicDampingFactor = 0.3;
      this.controls.keys = [65, 83, 68];
  
  
      var ambient = new THREE.AmbientLight(0xbbbbbb);
      this.scene.add(ambient);
  
      var directionalLight = new THREE.DirectionalLight(0xffffff);
      directionalLight.position.set(0, 0, 1);
      this.scene.add(directionalLight);
      this.material = new THREE.MeshPhongMaterial({ color: '#0b7dba', emissive: 0x072534, side: THREE.DoubleSide });
      this.first=0;
      this.height_position=0;
      // this.mesh= new THREE.Mesh();
      // this.mesh=Shell();
      // this.mesh.translateX(1.5);
      // this.scene.add(this.mesh);
  
      //this.scene.add(this.mesh2);
      console.log("component",this.props.component);
 
     
      this.start();

    
    }

    
    componentWillReceiveProps(nextProps) {
    
  }
     

      
  
      componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement);
      }
    
      start = () => {
        if (!this.frameId) {
          this.frameId = requestAnimationFrame(this.animate);
          this.controls.update();
          this.renderer.render(this.scene, this.camera);
        }
      }
    
      stop = () => {
        cancelAnimationFrame(this.frameId);
      }
    
      animate = () => {
        this.controls.update();
        this.renderScene();
        this.frameId = window.requestAnimationFrame(this.animate);
      }
    
      renderScene = () => {
        this.renderer.render(this.scene, this.camera);
      }
      render() {
        //console.log("component",this.props.component);
        if(this.props.component ){
        if( this.props.component.cylinderParam.length && this.props.component.cylinderParam.component==="Cylinder"){
          console.log("title",this.props.component.cylinderParam);
          var diameter=parseFloat(this.props.component.cylinderParam.sd);
          var length=parseFloat(this.props.component.cylinderParam.length);
          var number=parseFloat(this.props.component.cylinderParam.number);
          var thickness =parseFloat(this.props.component.cylinderParam.thickness);
              for (let i = 0; i < number; i++) {
                var shell= new THREE.Mesh();
                console.log("thickness:",thickness, "diameter:",diameter,"length:",length,"number:",number);
                shell = Shell(thickness,diameter,length);
                this.height_position=length*i;
                shell.translateY(this.height_position);  
                //this.scene.add(shell);
              
                this.group.add(shell);
              }    
              this.first=this.first+1;
            //   this.start();
            // }
          }
          else if(this.props.component && this.props.component.cylinderParam.component==="Ellipsoidal Head" && this.props.component.cylinderParam.HD){
            var diameter=parseFloat(this.props.component.cylinderParam.HD);
            var head = new THREE.Mesh();
            head = Head();
            if(this.first!==0 && this.head_no==0)
            {
              head.translateY(length*number);
            }
            else if(this.first!==0 && this.head_no!=0)
            {
              head.rotateZ(3.14);
            }
            else if (this.head_no==0  && this.first==0)
            {
              head.rotateZ(3.14)
            }
            this.height=this.height+diameter/2;
            this.group.add(head);
            this.head_no=1;
            this.first=this.first+1;
          }

          this.scene.add(this.group)
          //this.camera.position.z=(number*length)*2.5;
          this.start();
        }
        //console.log(this.props.component);
        return ( <div
          style={{ width: '100%', height: '700px' }}
          ref={(mount) => { this.mount = mount }}
        />
        );
      }

    }

    const mapStateToProps = state => {
      return {
          component: state.componentData.component,
          title: state.navigation.title
      };
  };
  
  // const mapDispatchToProps = dispatch => {
  //     return {
  //         onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
  //         onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  //     };
  // };

  
  export default connect(mapStateToProps, null)(Scene);