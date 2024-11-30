class BaseModel {
    constructor(id) {
      this.id = id;
    }
  
    save() {
      console.log(`${this.constructor.name} with ID ${this.id} saved to database.`);
    }
  }
  
  module.exports = BaseModel;
  