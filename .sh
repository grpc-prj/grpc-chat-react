protoc -I=. src/chat.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

protoc-gen-grpc-web -I=. src/chat.proto --js_out=import_style=commonjs:. --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.

protoc-gen-grpc-web chat.proto \
--js_out=import_style=commonjs,binary:./../js-client/src/sensorpb \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./../js-client/src/sensorpb



protoc-gen-grpc-web src/chat.proto \
    --js_out=import_style=commonjs:src \
    --grpc-web_out=import_style=commonjs,mode=grpcwebtext:src

docker run -d -v 0000/envoy.yaml:/etc/envoy/envoy.yaml:ro \
    -p 8080:8080 -p 9901:9901 envoyproxy/envoy:v1.17.0