let doc = document,
    M,
    I,
    hC,
    aC,
    rC,
    isInt
addEventListener("load", () => {
    M = tag => doc.createElement(tag)
    I = id => doc.getElementById(id)
    hC = (element, className) => {
        return element.classList.contains(className)
    }
    aC = (element, className, func) => {
        element.classList.add(className.trim())
        if (func) func(element)
        return (className, func) => {
            return aC(element, className, func)
        }
    }
    rC = (element, className, func) => {
        element.classList.remove(className.trim())
        if (func) func(element)
        return (className, func) => {
            return rC(element, className, func)
        }
    }
    
    // put below on another page using a load Event - except the end load line and below
    function FadeMaker(faderElement, placesElement) {
        const places = []
        let place
        this.addPlace = (name, background, link) => {
            const item = M("a"),
                placeEl = M("div")
            aC(placeEl, "fadeOut")
            placeEl.style.backgroundImage = 'linear-gradient(180deg, transparent, rgba(0, 0, 0, .5)),url("' + background + '")'
            item.textContent = name
            item.href = link
            item.classList.add('places--item')
            item.onmouseenter = () => {
                rC(place, "fadeIn")
                aC(place, "fadeOut")
                rC(placeEl, "fadeOut")
                aC(placeEl, "fadeIn")
                place = placeEl
            }
            placesElement.appendChild(item)
            faderElement.appendChild(placeEl)
            places.push([item, placeEl])
            return this
        }
        this.make = () => {
            place = places[0][1]
            rC(place, "fadeOut")
            places.forEach(a => {
                aC(a[1], "fade")
            })
            return this
        }
    }

    //create locations
    const fm = new FadeMaker(I("fader"), I("destinations"))
    fm.addPlace(
            "Equador",
            "images/ecuador-1.jpg",
            "http://google.com"
        )
        .addPlace(
            "Seattle",
            "images/seattle-1.jpg",
            "http://twitter.com"
        )
        .addPlace(
            "Arizona",
            "images/arizona-1.jpg",
            "http://facebook.com"
        )
        .addPlace(
            "Chicago",
            "images/chicago-1.jpg",
            "http://google.com"
        )
        .addPlace(
            "Boston",
            "images/boston-1.png",
            "http://twitter.com"
        )
        .addPlace(
            "Memphis",
            "images/memphis-1.jpg",
            "http://facebook.com"
        )
        .make()
})