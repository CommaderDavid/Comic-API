export class CharacterApperence {
  async getApperenceByCharacter(character) {
    try {
      let response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?name=${character}&ts=1591237440&apikey=${process.env.API_KEY}&hash=${process.env.API_HASH}`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}
