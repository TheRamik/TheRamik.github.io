import React from "react"

import Layout from "../components/layout"
import ProjDescription from "../components/proj-desc"
import SEO from "../components/seo"

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <h1>Projects</h1>
    <hr></hr>
    <p>Check out all of my Github projects <a href="https://github.com/TheRamik/">here</a>
    </p>
    <h3>Web Development Projects</h3>
    <ProjDescription
      title="Udacity Log Analysis"
      description="The first project from the Udacity course to create a Python tool, that grabs data from a database and
      summarizes the results. For this project, I decided to take a few steps further and created a CLI with
      Python and did as much error handling as I can."
      link="https://github.com/TheRamik/Udacity-Log-Analysis"
    ></ProjDescription>
    <ProjDescription
      title="Udacity Item Catalog Web Application"
      description="The second RESTful Web App project I've done, but the first using Python and Flask Web Framework. Definetely
      a very great project to learn about creating RESTful web applications. The course was designed and created by
      Google, Amazon, and other companies to learn all that's needed about Full Stack and this project took the cake."
      link="https://github.com/TheRamik/Udacity-Item-Catalog"
    ></ProjDescription>
    <ProjDescription
      title="Udacity Linux Configuration"
      description="The last project for the Udacity project was to move our webpage from our own virtual machine to a 
      Linux based machine on Amazon LightSail. From this project, I learned how to deploy the project to a server. There
      were many steps and very little from the tutorials explained what to do. Therefore, a lot of digging around between
      peers and googling needed to be done to get all the configuration and settings correct to deploy the web application.
      The project showed me a lot of Linux security and firewall settings."
      link="https://github.com/TheRamik/Udacity-Linux-Configuration"
    ></ProjDescription>
    <ProjDescription
      title="IMDB Movie List Web App"
      description="A project course at UCI to create a RESTful Web Application using Java. This was also the first
      web application I made. The project was to use a dataset and create a webpage out of it. With a team of two students,
      we learned how to use the JDBC Driver and access a MySQL database filled with movie data. We then created APIs to 
      create, read, update, and delete through the webpage to the database. In addition, because we had all the APIs in
      place, we were also able to create an android application that had access to these APIs and retrieve the same data."
      link="https://github.com/TheRamik/MyJavaWebApp"
    ></ProjDescription>
    
    <hr></hr>
    <h3>Algorithm Projects</h3>
    <ProjDescription
      title="Connect Four Puzzle - Java"
      description="The idea came from the first game I ever made at UCI. It was Connect Four, written in Python.
      I decided to practice my Java skills and created a Java version of it. I found a Github Repository
      that took these kind of projects and did a pull request there. This was also my very first pull request
      from an open source project!"
      link="https://github.com/ZoranPandovski/al-go-rithms/tree/master/puzzles/connect_four/java"
    ></ProjDescription>

    <hr></hr>
    <h3>Gaming Projects</h3>
    <ProjDescription
      title="Knight Light"
      description="This game is created in Unity and the second game I created at Global Game Jam (2018). The experience
      was very fast paced as there was always something to do. During this game jam, I met amazing artists, programmers, and
      sound engineers that allowed our idea become reality. The theme for Global Game Jam 2018 was 'Home' so my team decided to
      create a game where the player is the light, protector of the night, the Knight Light. The child will navigate around the
      Knight Light as monsters come charging at it and the only way to stop the monsters is to shine the light at it; only to find
      that these monsters are just toys spawned as monsters from the child's imagination."
      link="https://github.com/efrenaguilar95/KnightLight"
    ></ProjDescription>
    <ProjDescription
      title="Molio Meets World - Speed Fall"
      description="This game is created in Unity. Taking the Mario, Flappy Bird, and several other concepts, I created a
      game that puts a human-like Mole called Molio, into an adventure. He would fall down through pits , and must avoid
      spikes, monsters, and staying within the screen."
      link="https://github.com/TheRamik/Unity-Project-SpeedFall"
    ></ProjDescription>
    <ProjDescription
      title="Charger"
      description="This is the first game I created in Unity. Inspired by Dragon Ball Z, I created a 2D platformer game
      where the player must fly through and reach a destination. But in order to get to a location, they must charge up
      and have a certain amount of flying power to get from A to B."
      link="https://github.com/TheRamik/Unity-Project-Charger"
    ></ProjDescription>

  </Layout>
)

export default Projects
