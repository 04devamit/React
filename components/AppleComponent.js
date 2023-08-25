import ArrowComponent from "./arrowComponent"
import BasketComponent from "./basketComponent"
import leftImage from '../assets/images/left-image.jpg'
import rightImage from '../assets/images/right-image.jpg'
import './AppleComponent.css'
import ReactDOM from "react-dom/client";


const totalAppleCount = 10
let leftAppleCount = 0
let rightAppleCount = totalAppleCount - leftAppleCount





function AppleComponent() {


    // const totalAppleCount = 10
    // let leftAppleCount = 0
    // let rightAppleCount = totalAppleCount - leftAppleCount

    const leftEventHandler = () => {

        if (rightAppleCount > 0) {
            leftAppleCount++,
                rightAppleCount--,
                console.log(leftAppleCount, rightAppleCount),
                root.render(<AppleComponent />)
        }
    }

    const rightEventHandler = () => {
        if (leftAppleCount > 0) {
            rightAppleCount++,
                leftAppleCount--,
                console.log(leftAppleCount, rightAppleCount),
                root.render(<AppleComponent />)
        }
    }


    return (
        <section className="container" >
            <BasketComponent appleCount={leftAppleCount} store='basket-1' />

            <ArrowComponent onClick2={leftEventHandler} imageUrl={leftImage} title={'left-image'} />

            <ArrowComponent onClick2={rightEventHandler} imageUrl={rightImage} title={'right-image'} />

            <BasketComponent appleCount={rightAppleCount} store='basket-2' />
            <button style={{
                position: 'absolute', top: '5%', left: "48%",
            }} onClick={() => {
                root.render(<AppleComponent />)
            }} > Re-Render </button>

        </section>
    )
}

export default AppleComponent




const root = ReactDOM.createRoot(document.querySelector('#root'))


// ChatGpt explanation ------>>>>

// The AppleComponent is a functional component that represents a section with a "container" class. It includes instances of the BasketComponent and ArrowComponent components.

// In the first BasketComponent, it sets the appleCount prop to 0 and the store prop to 'Basket-1'.
// Then, it renders an instance of ArrowComponent with the leftImage as the imageUrl prop and 'left-image' as the title prop.
// Next, another instance of ArrowComponent is rendered, this time with rightImage as the imageUrl prop and 'right-image' as the title prop.
// Finally, another instance of BasketComponent is rendered with an appleCount of 10 and the store prop set to 'Basket-2'.

// my explanation ------>>>>>

// 1. when we write appleCount={leftAppleCount} and hit the left button it is not updated b/c when page first time loaded then Appcomponent function run and whatever the value is present it is render on the page, when we click on the button the even trigger and value changed but the whole page is not updated so we have to manually update the page.

// 2. so we manually render the page here by writting root.render (<AppComponent) it is not the way we work professionally but for learning purpose we are doing that.

// 3. and even we render the whole page again the value assign in the AppComponent component is going to again the same b/c we are writting these inside the component.--->>>

// const totalAppleCount = 10
//     let leftAppleCount = 0
//     let rightAppleCount = totalAppleCount - leftAppleCount

// 4. so we write these outside of the component.

// 5. now we want to render the AppleComponent so that the updated value will reflect on the browser ( value updated from onClick event) so we write root.render(<AppleCounter) component inside the button.

// 6. so when we click on the re-render button it is going to render the AppleCounter  function.

// 7. but we want that when we click on the left and right arrow then AppleCounter function will re-render so we add this root.render() inside the clickHandler function.

// 8. now we apply condition on that ->
