
// we use {} b/c props is object and we are destructuring it.
function ArrowComponent({imageUrl, title, onClick2}) {
    return (
        <button onClick = {onClick2}>
            <img src={imageUrl} alt={title} title={title} />

        </button>
    )
}
export default ArrowComponent


