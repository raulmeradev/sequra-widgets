import ReactDOM from 'react-dom/client'
import { InstalmentsSelector, InstalmentsSelectorProps } from './index'

class InstalmentsSelectorWebComponent extends HTMLElement {
  static observedAttributes = ['credit']
  protected root: ReactDOM.Root | undefined

  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.renderReactComponent()
  }

  attributeChangedCallback() {
    if (this.root) {
      this.root.unmount()

      const rootNode = this.shadowRoot?.getRootNode()
      if (rootNode && rootNode.parentNode) rootNode.removeChild(rootNode.parentNode.removeChild(rootNode))

      this.renderReactComponent()
    }
  }

  private renderReactComponent() {
    const props = this.getPropsFromAttributes<InstalmentsSelectorProps>()

    this.root = ReactDOM.createRoot(this.shadowRoot as ShadowRoot)
    const reactEl = <InstalmentsSelector {...props} />
    this.root.render(reactEl)
  }

  private getPropsFromAttributes<T>(): T {
    const props: Record<string, string> = {}

    Array.from(this.attributes).forEach(attribute => (props[attribute.name] = attribute.value))
    return props as T
  }
}

customElements.define('sequra-installments', InstalmentsSelectorWebComponent)
export default InstalmentsSelectorWebComponent
