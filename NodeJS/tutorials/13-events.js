/* We are going to get the custom emitter class
needed if you want to custom extend from class otherwise
for emitting and handles events create an instance of this class
*/

const EventEmitter = require('events')

const customEmitter = new EventEmitter()

/*
The on and emit methods are to keep track of the order
You can also use additional arguments/parameters and the built in 
functions/modules can utilize them
*/

customEmitter.on('respone', (name, id)=>{
    console.log(`data received user: ${name} with id ${id}`)

})

customEmitter.on('testing', ()=>{
    console.log('Some other logic it at work here')
})

customEmitter.emit('respone','john', 34)
customEmitter.emit('testing','adam', 26)

//Example:

class TemperatureSensor extends EventEmitter{
    constructor(){
        super()
        this.temperature = 95
    }
    updateTemperature(newTemp){
        this.temperature = newTemp
        this.emit('Temperature Update', newTemp)
    }
}

const sensor = new TemperatureSensor

//Listener for the temperature updates
sensor.on('Temperature Update', (temp)=>{
    console.log(`The temperature has been updated to ${temp}° F`)
    //OR: Trigger a new function, API call or calculation
})

//Simulate temperature changes
sensor.updateTemperature(25)
sensor.updateTemperature(104)
