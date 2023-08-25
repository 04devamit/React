
    function BasketComponent({appleCount, store}) {
    const apple = 'Apple'
  return (
    <div>
        <h2> {appleCount} {apple} </h2>
        <p>{store}</p>

    </div>
  )
}
export default BasketComponent;
