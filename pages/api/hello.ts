// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {NodeType} from "../../config/types";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({name: 'John Doe'})
}

export const nodeToDom = (item: any) => {
  let node: NodeType = {tag: "", attrs: [], childs: ""}
  if (typeof item === "string") {
    node.childs = `${item}`;
  }
  if (item.tag) {
    if (item.attrs) {
      let attrs = [];
      for (let key in item.attrs) {
        attrs.push(`${key}="${item.attrs[key]}"`);
      }
      node.tag = item.tag;
      node.attrs = attrs;
    } else {
      node.tag = item.tag;
    }
    if (item.children) {
      let childrens = [];
      for (let i = 0; i < item.children.length; i++) {
        let child = item.children[i];
        childrens.push(nodeToDom(child));
        node.childs = childrens.join("");
      }
    }
  }
  if (item.tag === "pre") {
    return `<${item.tag}><code>${item.children[0]}</code></${item.tag}>`
  }
  if (node.tag.length > 0) {
    return `<${node.tag} ${[...node.attrs]}>${node.childs}</${node.tag}>`
  } else {
    return `${node.childs}`
  }
};

