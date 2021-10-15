const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor(){
    this.tree = null;
  }

  root() {
    return this.tree ? this.tree : null;
  }

  add(data) {
    if(!this.tree){
      this.tree = new Node(data);
    } else {
      let currentNode = this.tree;
      while(currentNode){
        if(data < currentNode.data){
          if(currentNode.left){
            currentNode = currentNode.left;
          } else {
            currentNode.left = new Node(data);
            break;
          }
        } else {
          if(currentNode.right){
            currentNode = currentNode.right;
          } else {
            currentNode.right = new Node(data);
            break;
          }
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    let current = this.tree;
    while(current){
      if(current.data === data){
        return current;
      } else{
        current.data > data ? current = current.left : current = current.right;
      }
    }
    return null;
  }

  remove(data) {
    let node = this.find(data);
    if(node){
      let current = this.tree;
      while(current){
        if(current.data === data){
          this.tree = node.right;
          this.bypass(node.left);
          return;
        }

        if(current.left && current.left.data === data){
          current.left = null;
          break;
        }else if(current.right && current.right.data === data){
          current.right = null;
          break;
        } else {
          current.data > data ? current = current.left : current = current.right;
        }
      }
      this.bypass(node.right);
      this.bypass(node.left);
      
    }
  }

  bypass(node){
    if(!node){
      return;
    }
    this.add(node.data);
    this.bypass(node.right);
    this.bypass(node.left);
  }

  min() {
    if(!this.tree){
      return null;
    }
    let current = this.tree;
    while(current.left){
      current = current.left;
    }
    return current.data;
  }

  max() {
    if(!this.tree){
      return null;
    }

    let current = this.tree;
    while(current.right){
      current = current.right;
    }
    return current.data;
  }

}