const config: Record<'isAdmin' | 'isUser', boolean> = {
    isAdmin: true,
    isUser: false
}

function sum (...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b, 0)
}