import request from 'node-superfetch';

/**
 * The main class.
 */
class Coffee {
	/**
	 * Get a random coffee image buffer!
	 * @returns {Promise<Buffer>} The image buffer.
	 */
	static async getBuffer(): Promise<Buffer> {
		const { raw } = await request.get('https://coffee.alexflipnote.dev/random');
		return raw;
	}

	/**
	 * Get a random coffee image url!
	 * @returns {Promise<string>} The image url.
	 */
	static async getURL(): Promise<string> {
		const { body } = await request.get('https://coffee.alexflipnote.dev/random.json');
		const url: string = (body as any).file;
		return url;
	}
}

export = Coffee;
