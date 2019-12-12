curl "http://localhost:4741/sign-out" \
  --include \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --request DELETE \

echo
