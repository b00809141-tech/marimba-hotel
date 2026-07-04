#!/bin/bash
set -e
if echo dGVzdA== | base64 -D >/dev/null 2>&1; then B64FLAG="-D"; else B64FLAG="-d"; fi
echo 'Appending overflow-safety CSS to styles/globals.css...'
base64 $B64FLAG << 'B64_OVERFLOW_1' >> styles/globals.css
Cmh0bWwsIGJvZHkgewogIG92ZXJmbG93LXg6IGhpZGRlbjsKICBtYXgtd2lkdGg6IDEwMCU7Cn0KKiB7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKfQppbWcsIHZpZGVvIHsKICBtYXgtd2lkdGg6IDEwMCU7CiAgaGVpZ2h0OiBhdXRvOwp9Cg==
B64_OVERFLOW_1
echo 'Done. Restart your dev server / redeploy to see changes.'
