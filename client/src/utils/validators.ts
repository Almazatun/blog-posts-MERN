export const validators = (userName: string, password: string): {errors: Array<string>, valid: boolean} => {
    let errors: Array<string> = []

    if (!userName) {
        errors.push('User name should be required')
    }

    if (!password) {
        errors.push('Password should be required')
    }

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}