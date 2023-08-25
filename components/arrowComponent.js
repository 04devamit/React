
// we use {} b/c props is object and we are destructuring it.
function ArrowComponent({imageUrl, title}) {
    return (
        <div>
            <img src={imageUrl} alt={title} title={title} />

        </div>
    )
}
export default ArrowComponent


