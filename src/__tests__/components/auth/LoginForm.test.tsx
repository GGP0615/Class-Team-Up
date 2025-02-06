import { render, screen, fireEvent } from '@testing-library/react'
import LoginForm from '@/components/auth/LoginForm'
import '@testing-library/jest-dom'
import { describe, expect, it, jest } from '@jest/globals'
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
    }
  },
}))

describe('LoginForm', () => {
  it('renders login form', () => {
    render(<LoginForm />)
    
    expect(screen.getByLabelText(/email/i)).toBeTruthy()
    expect(screen.getByLabelText(/password/i)).toBeTruthy() 
    expect(screen.getByRole('button', { name: /sign in/i })).toBeTruthy()
  })

  it('handles form submission', async () => {
    render(<LoginForm />)
    
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: 'test@example.com' },
    })
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: 'password123' },
    })
    
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }))
    
    // Add asgdhfsavfbshfjsggfshjfsfvshfbsajhfvshssertions for form submission behavior
  })
})