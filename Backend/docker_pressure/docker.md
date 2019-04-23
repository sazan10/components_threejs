## starting 

Following url (https://realpython.com/django-development-with-docker-compose-and-machine/)

1. Install Docker Compose

    ```
    sudo curl -L "https://github.com/docker/compose/releases/download/1.23.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

    sudo chmod +x /usr/local/bin/docker-compose

    ```
    Then check version using 
    ```
    docker-compose --version
    ```

2. Install Docker Machine

    ```
    $ base=https://github.com/docker/machine/releases/download/v0.16.0 && curl -L $base/docker-machine-$(uname -s)-$(uname -m) >/tmp/docker-machine && sudo install /tmp/docker-machine /usr/local/bin/docker-machine
    ```
    Then check version using 
    ```
    docker-machine --version
    ```

3. Create project structure like

    ```
    ├── docker-compose.yml
    ├── nginx
    │   ├── Dockerfile
    │   └── sites-enabled
    │       └── django_project
    ├── production.yml
    └── web
        ├── Dockerfile
        ├── docker_django
        │   ├── __init__.py
        │   ├── apps
        │   │   ├── __init__.py
        │   │   └── todo
        │   │       ├── __init__.py
        │   │       ├── admin.py
        │   │       ├── models.py
        │   │       ├── templates
        │   │       │   ├── _base.html
        │   │       │   └── home.html
        │   │       ├── tests.py
        │   │       ├── urls.py
        │   │       └── views.py
        │   ├── settings.py
        │   ├── urls.py
        │   └── wsgi.py
        ├── manage.py
        ├── requirements.txt
        └── static
            └── main.css
    ```

4. Install VirtualBox if not installed

    ```
    sudo apt-get install virtualbox
    ```

5. Start the Docker Machie

    ```
    docker-machine create -d virtualbox dev;
    ```

6. Now just point Docker at the dev machine:

    ```
    $ eval $(docker-machine env dev)
    ```

7. To view currently running machine

    ```
    $ docker-machine ls
    ```

8. Make project look similar to the above following url project url

9. Build using docker-compose 

    ```
    docker-compose build
    ```
    if error occurs about gcloud install gcloud. might be due to configuration file present in the docker created during the glocd installling. simply delete it. to run docker locally. The file can be found in ~/.docker/config.json

10. After successful build

    ```
    docker-compose up -d
    ````

11. Once the services are running, we need to create the database migrations:

    ```
    $ docker-compose run web /usr/local/bin/python manage.py migrate
    ```
    error might occur with the issue port already used in postgres 
    solution simply change port of postgres in docker-compose.yml to 5433:5432

12. Grab the IP associated with Docker Machine - docker-machine ip dev - and then navigate to that IP in your browser:

13. view running containser

    ```
    docker-compose ps
    ```

14. to view environment variable available in web

    ```
    $ docker-compose run web env
    ```

15. to view logs

    ```
    $ docker-compose logs
    ```

16. to view postgres

    ```
    $ psql -h 192.168.99.100 -p 5432 -U postgres --password
    ```

17. Stop the processes via docker-compose stop
    
    ```
    $ docker-compose stop
    ```