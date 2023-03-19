# Veritas Portal

# Installation

The portal is developed using Docker, NodeJs and Mysql. 

First install make sure docker and docker compose are installed. There are numerous tutorials online that shows how to get Docker working on your machine. Or refer to https://www.docker.com/ 

Make sure you can see similar outputs when you type following commands on your machine

```
MacBook-Pro ~ %  docker ps
CONTAINER ID   IMAGE         COMMAND                  CREATED       STATUS          PORTS                               NAMES

```
```
MacBook-Pro ~ % docker compose

Usage:  docker compose [OPTIONS] COMMAND

Docker Compose

Options:
      --ansi string                Control when to print ANSI control characters ("never"|"always"|"auto") (default "auto")
      --compatibility              Run compose in backward compatibility mode
      --env-file string            Specify an alternate environment file.
  -f, --file stringArray           Compose configuration files
      --profile stringArray        Specify a profile to enable
      --project-directory string   Specify an alternate working directory
                                   (default: the path of the, first specified, Compose file)
  -p, --project-name string        Project name
  
  .....

```

Then download this repo.  Go into the root of the downloaded repo and execute follwing commands

```
docker compose -f node.yml up

```
then go to

```
http://localhost:8081/login

```
If you see a login screen like the following. Congradulations!

![Screen Shot 2023-03-19 at 10 59 54 pm](https://user-images.githubusercontent.com/122984059/226173725-567b7d1b-4674-4b1f-976e-7d20e1ad2b25.png)


# Code structure

The code is organise as follows

```
|--src
  |-- express.js (main program)
  |-- views      ( contains ejs file for portal pages rendering)
```  
  
  
  

