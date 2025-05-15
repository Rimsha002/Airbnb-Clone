import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  
  static targets = ["openUserMenu"]
  
  connect() {
    
    console.log("Header connected")

  this.openUserMenuTarget.addEventListener("click", (e)=>{
    console.log("Header clicked");
  } )

  }
  
}