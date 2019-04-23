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