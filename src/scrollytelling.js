
const offset = 0.9 

function initScrolling (className) {

  window.addEventListener("scroll", () => {

    //Get all the scroll containers, can be more than one
    const containerSteps = document.querySelectorAll('.scroll-section')
    
    Array.from(containerSteps).forEach((container) => {
      
      //get all the steps into a container
      const steps = container.querySelectorAll(".step")
    
      Array.from(steps).forEach((step) => {
        const start = step.offsetTop - (window.innerHeight * offset)
        const end = step.offsetTop + step.offsetHeight  - (window.innerHeight * offset)
      
        if((end >= scrollY) && (start <= scrollY)) {
          changeScene(step)
        } else {
          removeScene(step)
        }
      })

    })
  })

}

function removeScene(step) {
  const scene = step.dataset.scroll
  if(document.getElementById(scene)) {
    //The ID for the stiky element should match the data-scroll value from the step
    const sceneElement = document.getElementById(scene)
    sceneElement.classList.remove("entered")
  }
}

function changeScene(step) {
  const scene = step.dataset.scroll
  if(document.getElementById(scene)) {
    //The ID for the stiky element should match the data-scroll value from the step
    const sceneElement = document.getElementById(scene)
    sceneElement.classList.add("entered")
  }
}

//init scroll gallery
initScrolling()