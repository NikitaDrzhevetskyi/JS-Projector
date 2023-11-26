'use strict'

//1
function detonatorTimer(delay) {
  let timerId = setInterval(function () {
    if (delay > 0) {
      console.log(delay)
      delay--
    } else {
      clearInterval(timerId)
      console.log('Boom')
    }
  }, 1000)
}
//detonatorTimer(4);

//2
function detonatorTimerAnother(delay) {
  let timerId = function go() {
    if (delay > 0) {
      console.log(delay)
      delay--
      setTimeout(go, 500)
    } else {
      console.log('Boom!')
    }
  }
  setTimeout(timerId, 500)
}
//detonatorTimerAnother(3);

let me = {
  name: 'Nikita',
  age: 21,
  residency: 'Lviv',
  email: 'n.drzhevetskyi@gmail.com',
  position: 'Trainee Frontend developer',
  hardskillls: [
    'HTML',
    'CSS',
    'Javascript',
    'Angular',
    'TypeScript',
    'SCSS',
    'Sass',
    'Less',
  ],
  softskills: [
    'Communication',
    'Problem-solving',
    'Teamwork',
    'Time management',
  ],
  projects: [
    {
      name: 'Portfolio website',
      description: 'Designed and implemented a personal portfolio website',
      technologies: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'E-commerce Website',
      description: 'Developed a responsive e-commerce website',
      technologies: ['HTML', 'Angular', 'TypeScript', 'SCSS'],
    },
  ],
  hobbies: ['Gaming', 'Reading', 'Traveling', 'Kayaking'],
  socialLinks: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/n_drzhevetskyi/',
    lidkedIn: 'https://www.linkedin.com/feed/',
  },

  showInformation() {
    return console.log(
      `My name is ${this.name}\nMy age is ${this.age}\nMy position is ${this.position}`
    )
  },

  showHardSkills() {
    return this.hardskillls.forEach((skill) => {
      console.log(`${skill}`)
    })
  },
}

let bindedShowInformation = me.showInformation.bind(me)
let bindedShowHardSkills = me.showHardSkills.bind(me)

setTimeout(bindedShowInformation, 3000)
setTimeout(bindedShowHardSkills, 2000)
