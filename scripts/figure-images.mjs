// Remove Markdown's image-only paragraph before Astro optimizes the image.
export default {
  name: 'figure-images',
  element: {
    filter: ['p'],
    visit(node, context) {
      const parent = context.parent(node);
      const isFigure = parent?.type === 'mdxJsxFlowElement'
        ? ['FigureSingle', 'figure'].includes(parent.name)
        : parent?.type === 'element' && parent.tagName === 'figure';
      if (!isFigure) return;

      const [child] = node.children;
      if (node.children.length !== 1 || child.type !== 'element') return;
      const isImage = child.tagName === 'img';
      const isLinkedImage = child.tagName === 'a' && child.children.length === 1 &&
        child.children[0].type === 'element' && child.children[0].tagName === 'img';
      if (isImage || isLinkedImage) return child;
    }
  }
};
