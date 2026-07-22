import { it, expect, describe } from "vitest";
import {Product} from './Product'

describe('Product component',()=>{
    it('displays product details correctly',()=>{
        
    })
})

//TO-DO add the code to proper files
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.js',
  }
});


import '@testing-library/jest-dom';