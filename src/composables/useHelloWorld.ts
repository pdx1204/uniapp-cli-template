import {ref} from 'vue';

export const useHelloWorld = () => {
    const msg = ref('Hello World');
    const sayHello = () => {
        console.log('Hello World');
    };

    return {
        sayHello,
    };
}