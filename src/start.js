//
// Entry point for the script

import LocalEntity from './LocalEntity'

/** This is the entity class for the entity this script is attached to. */
export default class MyEntity extends LocalEntity {

    /** Called when the script is loaded, and the entity ID has been retrieved. */
    preload(id) {
        super.preload(id)



    }

    /** Called when the script is unloaded */
    unload() {
        super.unload()



    }

    /** Called when user enters an entity */
    enterEntity(id) {

        // Check if ours
        if (id != this.id)
            return

        // User has entered the bounds of our entity

    }

    /** Called when user leaves an entity */
    leaveEntity(id) {

        // Check if ours
        if (id != this.id)
            return

        // User has left the bounds of our entity

    }

}
