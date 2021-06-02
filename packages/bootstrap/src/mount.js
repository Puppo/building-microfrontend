function moveNodeToDocument(parent, document) {
  return function moveNode(node) {
    // Cloning or Adopting <scripts> nodes doesn't re-evaluate them
    // Read more here: https://stackoverflow.com/questions/28771542/why-dont-clonenode-script-tags-execute
    if (node.tagName === "SCRIPT") {
      const clonedNode = document.createElement(node.tagName);

      [...node.attributes].forEach(attribute =>
        clonedNode.setAttribute(attribute.name, attribute.value)
      );
      clonedNode.innerHTML = node.innerHTML;

      parent.appendChild(clonedNode);
      return;
    }

    const adoptedNode = document.adoptNode(node);
    parent.appendChild(adoptedNode);
  };
}

function addOrUpdateBaseTag(microFrontendName) {
  const baseElement = document.createElement("base");
  baseElement.setAttribute("href", `/mfe/${microFrontendName}/`);
  document.head.appendChild(baseElement);
}

function mountMicroFrontendInPage(microFrontendName, microFrontendDocument) {
  addOrUpdateBaseTag(microFrontendName);

  const microFrontendHeadNodes =
    microFrontendDocument.querySelectorAll("head>*");
  const microFrontendBodyNodes =
    microFrontendDocument.querySelectorAll("body>*");

  microFrontendHeadNodes.forEach(moveNodeToDocument(document.head, document));
  microFrontendBodyNodes.forEach(moveNodeToDocument(document.body, document));
}

export default mountMicroFrontendInPage;
