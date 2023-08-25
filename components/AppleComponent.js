import ArrowComponent from "./arrowComponent"
import BasketComponent from "./basketComponent"
import leftImage from '../assets/images/left-image.jpg'
import rightImage from '../assets/images/right-image.jpg'
import './AppleComponent.css'


function AppleComponent() {
    const basket1 = 'Basket-1'
    const basket2 = 'Basket-2'
    return (
        <section className="container">
            <BasketComponent appleCount={0} store={basket1} />
            <ArrowComponent imageUrl={leftImage} title={'left-image'} />
            <ArrowComponent imageUrl={rightImage} title={'right-image'} />
            <BasketComponent appleCount={10} store={basket2} />

        </section>
    )
}

export default AppleComponent

// The AppleComponent is a functional component that represents a section with a "container" class. It includes instances of the BasketComponent and ArrowComponent components.

// In the first BasketComponent, it sets the appleCount prop to 0 and the store prop to 'Basket-1'.
// Then, it renders an instance of ArrowComponent with the leftImage as the imageUrl prop and 'left-image' as the title prop.
// Next, another instance of ArrowComponent is rendered, this time with rightImage as the imageUrl prop and 'right-image' as the title prop.
// Finally, another instance of BasketComponent is rendered with an appleCount of 10 and the store prop set to 'Basket-2'.