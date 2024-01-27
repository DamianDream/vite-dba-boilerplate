 
// get all available env data variables
 export const uViteCreateEnvObject = () => {
    // get ENV object from Vite
    const env = loadEnv("mock", process.cwd(), "");

    // Reduce below return object with all env variables (uncomment code bellow)
    const processEnvValues = {
        "process.env": Object.entries(env).reduce((prev, [key, val]) => {
        return {
            ...prev,
            [key]: val,
        };
        }, {}),
    }

    return env;

 }

// --- EXAMPLE (How to recall single env variable)
// const ENV_NAME = JSON.stringify(env.ENV_NAME)

// Return specific env variable by Name
export const uExtractEnvVariableByName = (envName) => {
    const result = JSON.stringify(env.envName)
    return result
}
