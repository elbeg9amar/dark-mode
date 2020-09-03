import { useLocalStorage } from './useLocalStorage'
import {useState} from 'react'


export const useDarkMode = (key) => {
    const [someValue, setSomeValue] = useLocalStorage(key)

}
