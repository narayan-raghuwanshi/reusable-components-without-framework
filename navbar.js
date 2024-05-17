class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
      <nav class="flex justify-between px-14 py-4 bg-gray-800 text-white text-lg font-semibold">
        <h1>🚀</h1>
        <ul class="flex gap-6">
          <li class="hover:text-sky-500"><a href="/">Home</a></li>
          <li class="hover:text-sky-500"><a href="/about">About</a></li>
          <li class="hover:text-sky-500"><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    `;
    }
}

customElements.define('app-navbar', Navbar);