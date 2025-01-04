import react, { use } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWallet } from '../Store';

export default function Payment () {
const data = useSelector(state => state.user)
const dispatch = useDispatch();
const handleClick = () => {
    dispatch(updateWallet(5000))
};

    return (
        <>
        <h1>{data.username}, {data.balance}</h1>
        <button onClick={handleClick}>Pay</button>
        </>
    )
    
}