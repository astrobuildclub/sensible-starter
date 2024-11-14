import { sanityClient } from 'sanity:client'

export async function getSanity(query:string) {
	const response = await sanityClient.fetch(query)
	return response
}