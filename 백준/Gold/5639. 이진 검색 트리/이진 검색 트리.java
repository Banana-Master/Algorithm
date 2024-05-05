import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

public class Main {
    static class Node {
        int key;
        Node left, right;

        public Node(int key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }
    }

    static class BinarySearchTree {
        Node root;

        public void add(int key) {
            root = addRecursive(root, key);
        }

        private Node addRecursive(Node current, int key) {
            if (current == null) {
                return new Node(key);
            }

            if (key < current.key) {
                current.left = addRecursive(current.left, key);
            } else if (key > current.key) {
                current.right = addRecursive(current.right, key);
            }

            return current;
        }

        public void printPostOrder(Node node) {
            if (node != null) {
                printPostOrder(node.left);
                printPostOrder(node.right);
                System.out.println(node.key);
            }
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BinarySearchTree bst = new BinarySearchTree();
        String input;

        while ((input = br.readLine()) != null && !input.isEmpty()) {
            int key = Integer.parseInt(input);
            bst.add(key);
        }

        bst.printPostOrder(bst.root);
    }
}
