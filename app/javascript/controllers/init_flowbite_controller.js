import { Controller } from "@hotwired/stimulus"
import { initFlowbite } from "flowbite";

// Connects to data-controller="init-flowbite"
export default class extends Controller {
  initialize() {
    console.log('initialized')
    // initFlowbite();
  }
}
