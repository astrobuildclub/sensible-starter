import { sanityClient } from 'sanity:client'
import imageUrlBuilder from '@sanity/image-url'

export const imageBuilder = imageUrlBuilder(sanityClient)

export function getImageUrl(source:any) {
	return imageBuilder.image(source)
}