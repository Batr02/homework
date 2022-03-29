class Car {
    #brand;
    #model;
    #yearOfManufacturing;
    #maxSpeed;
    #maxFuelVolume;
    #fuelConsumption;
    #currentFuelVolume ;
    #isStarted;
    #mileage;

    start() {
        if (this.#isStarted) {
            throw Error('Машина уже заведена');
        }

       return this.#isStarted = true;
    }

    shutDownEngine() {
        if (!this.#isStarted) {
            throw Error( 'Машина ещё не заведена');
        }

        return this.#isStarted = true;
    }

    fillUpGasTank(value) {
        const fillUpGasTankCondition = typeof(value) !== 'number' || value <= 0;

        if (fillUpGasTankCondition) {
            throw Error ('Неверное количество топлива для заправки');
        } else if (value > this.#maxFuelVolume) {
            throw Error ('Топливный бак переполнен');
        }

        this.#currentFuelVolume = this.currentFuelVolume + value;
    }

    


    drive(speed, amountT) {
        const speedCondition = 
        typeof(speed) !== 'number' || this.fillUpGasTank <= 0;

        const amountTCondition = 
        typeof(amountT) !== 'number' || amountT <= 0;

        const distance = speed * amountT;
        const neededFuel = ((distance * this.#fuelConsumption) / 100);

        if (speedCondition) {
            throw Error('Неверная скорость');
        }

        if (amountTCondition) {
            throw Error('Неверное количество часов');
        }

        if (speed > this.#maxSpeed) {
            throw Error( 'Машина не может ехать так быстро');
        }

        if (!this.#isStarted) {
            throw Error('Машина должна быть заведена, чтобы ехать');
        }

        if (this.#fuelConsumption === undefined) {
            throw Error('укажите расход топлива');
        }

        if (neededFuel > this.#currentFuelVolume) {
            throw Error('Недостаточно топлива');
        }

        this.#mileage = this.mileage + distance; 
 
        return `${neededFuel}л - необходимое топливо`
    }

    set brand(val) {
        const brandCondition = 
        typeof(val) !== 'string' || val.length < 1 || val.length > 50;
        
        if(brandCondition) {
            console.log('wrong brand input!');
        }

        this.#brand = val;
    }

    get brand() {
        return this.#brand;
    }

    set model(val) {
        const modelCondition = 
        typeof(val) !== 'string' || val.length < 1 || val.length > 50;
        
        if(modelCondition) {
            console.log('wrong model input!');
        }

        this.#model = val;
    }

    get model() {
        return this.#model;  
    }

    set yearOfManufacturing(val) {
        const currentYear = new Date().getFullYear();
        const yearOfManufacturingCondition =
        typeof(val) !== 'number' || (val < 1900) || (val > currentYear);

        if(yearOfManufacturingCondition) {
            console.log('wrong yearOfManufacturing input!');
        }

        this.#yearOfManufacturing = val;
    }

    get yearOfManufacturing() {
        return this.#yearOfManufacturing;
    }

    set maxSpeed(val) {
        const maxSpeedCondition = 
        typeof(val) !== 'number' || (val < 100) || (val > 300);

        if (maxSpeedCondition) {
            console.log('wrong maxSpeed input!');
        }

        this.#maxSpeed = val;
    }

    get maxSpeed() {
        return `${this.#maxSpeed} км/ч`
    }

    set maxFuelVolume(val) {
        const maxFuelVolumeCondition = 
        typeof(val) !== 'number' || (val < 5) || (val > 20);
        
        if(maxFuelVolumeCondition) {
            console.log('wrong maxFuelVolume input!');
        }

        this.#maxFuelVolume = val;
    }

    get maxFuelVolume() {
        return `${this.#maxFuelVolume} литров`
    }

    set fuelConsumption(val) {
        const fuelConsumptionCondition = 
        typeof(val) !== 'number' || (val < 1) || (val > 200)

        if(fuelConsumptionCondition) {
            console.log('wrong fuelConsumption input!');
        }

        this.#fuelConsumption = val;
    }

    get fuelConsumption() {
        return `${this.#fuelConsumption} л/100км`
    }
 
    get currentFuelVolume() {
        if(this.#currentFuelVolume === undefined) {
            return  this.#currentFuelVolume = 0;
        }

        return  this.#currentFuelVolume;
    }

    get isStarted () {
        this.#isStarted = false;

        return  this.#isStarted;
    }

    get mileage() {
        if(this.#mileage === undefined) {
            return  this.#mileage = 0;
        }

        return  `${this.#mileage} км`
    }
}

let car = new Car();

