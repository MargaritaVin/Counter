import { memo } from "react";

import { Input, IconButton, Box } from '@chakra-ui/react'
import {AddIcon, MinusIcon} from '@chakra-ui/icons'

import useCounter from "../hooks/useCounter";

const Counter = () => {
    const { count, increment, decrement, initialValue, reset, setCount} = useCounter();

    const handleChange = ({ target: { value } }) => {
        if (value < initialValue) {
          reset();
        } else {
          setCount(value);
        }
    };

    const isDisabled = count <= initialValue;

    return (
        <Box display='flex' justifyContent='center' marginTop='50'>
          <IconButton
            colorScheme='blue'
            onClick={increment}
            size='lg'
            icon={<AddIcon />}
          />
          <Input 
            value={count} 
            onChange={handleChange}
            width='auto'
            size='lg'
            htmlSize={4}
            textAlign='center'
          />
          <IconButton
            disabled={isDisabled}
            colorScheme='blue'
            onClick={decrement}
            size='lg'
            icon={<MinusIcon />}
          />
        </Box>
    );
};

export default memo(Counter);