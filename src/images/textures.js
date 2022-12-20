import { grassImg } from './images'

import { RepeatWrapping, TextureLoader, NearestFilter } from 'three'

export const groundTexture = new TextureLoader().load(grassImg)
groundTexture.wrapS = RepeatWrapping
groundTexture.wrapT = RepeatWrapping
groundTexture.magFilter = NearestFilter
