// This workflow allow you to start any number of scripts files from indicates folder.

// OPTION for import object: 
// eager: true | false
// - true (run function after main script loaded), no need to iterate thru function / Export data available
// - false (default value. it will run functions inside scripts after iteration) / Export data available only after function call

// import: 'default' | 'name'
// provide import only specified data exports (module().then(name => console.log(name)))

export const autoStartModules = () => {

    const importStartModules = import.meta.glob('../autoStartScripts/*.js', { eager: false });

    Object.values(importStartModules).forEach(module => {

        // module()

        module().then(data => {
            console.log(data?.exportData);
        })
    })

}


// USAGE:
// import { autoStartModules } from '@js/utils/uAutoStartScriptFiles.js'
// autoStartModules()
