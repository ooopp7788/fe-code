function mapTree(tree) {
    const stack = [tree]

    while(stack.length) {
        const node = stack.shift();
        const { left, right, value } = node;
        console.log(value)
        if (left) {
            stack.push(left)
        }
        if (right) {
            stack.push(right)
        }
    }
}

const t = {
    value: 1,
    left: {
        value: 2,
        left: null,
        right: {
            value: 3.5,
            left: {
                value: 6,
                right: {
                    value: 9,
                }
            },
        }
    },
    right: {
        value: 3,
        left: {
            value: 4,
        },
        right: {
            value: 5,
            left: {
                value: 7,
            },
            right: {
                value: 8,
                left: {
                    value: 10
                }
            }
        }
    }
}

mapTree(t)