export default class ParseData {
  constructor(data) {
    this.offers = data;
  }

  toRaw() {
    return (
      this.offers.map((item) => {
        return ({
          id: item.id,
          title: item.title,
          price: item.price,
          srcImg: item[`preview_image`],
          imageURLs: item.images,
          description: item.description,
          premium: item[`is_premium`],
          type: item.type,
          rate: item.rating,
          bedrooms: item.bedrooms,
          maxGuests: item[`max_adults`],
          apartmentDetails: item.goods,
          ownerInfo: {
            name: item.host.name,
            super: item.host[`is_pro`],
            srcAvatar: item.host[`avatar_url`],
            id: item.host.id
          },
          positions: [item.location[`latitude`], item.location[`longitude`]],
          city: item.city.name,
          favorite: item.is_favorite
        });
      })
    );
  }

  toCityes() {
    let cityesSet = {};
    this.offers.forEach((item) => {
      cityesSet[item.city.name] = item.city.location;
    });
    return cityesSet;
  }
}
