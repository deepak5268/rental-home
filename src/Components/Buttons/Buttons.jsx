import Button from 'react-bootstrap/Button';
function Buttons({variant, extraClass, value, size}){
    return(
        <Button variant={variant} size={size} className={`${extraClass}`}>{value}</Button>
    )
}
export default Buttons;