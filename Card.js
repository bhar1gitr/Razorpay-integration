import React from 'react';
import { Button, Typography, Stack } from '@mui/material'

const Card = ({ amount, img, checkoutHandler }) => {
    return (
        <div>
            <Stack>
                <img src={img}   />
                <Typography>₹{amount}</Typography>
                <Button onClick={() => checkoutHandler(amount)}>Buy Now</Button>
            </Stack>
        </div>
    )
}

export default Card