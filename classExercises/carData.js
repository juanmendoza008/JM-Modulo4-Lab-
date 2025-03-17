const carData = [
    {
        title: "Audi",
        description:
        "Audi AG is a German automotive manufacturer of luxury vehicles headquartered in Ingolstadt, Bavaria, Germany.",
    },
    {
        title: "Mercedes-Benz",
        description:
        "Mercedes-Benz,commonly referred to as Mercedes, is a German luxuryautomotive brand.",
    },
    {
        title: "BMW",
        description:
        "Bayerische Motoren WerkeAG, commonly referred to as BMW, is a German multinational corporate manufacturer of luxury vehicles and motorcycles headquartered in Munich, Bavaria, Germany.",
    },
    ];

    // use carData and getCars function from previous slide
    // clone, then populate, then append a new template
    function addCard(car) {
    const template =
    document.getElementById("car-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = car.title;
    template.querySelector('.card-text').innerText = car.description;
    document.querySelector('#car-list').appendChild(template);
    }
    // get data asynchronously, then use it to populate a template
    getCars().then( (cars) => cars.forEach(car => addCard(car)) )