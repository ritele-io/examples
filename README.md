# Ritele examples

Small, copyable setups for sending OpenTelemetry to [Ritele](https://ritele.io). Each one runs in a few minutes and leaves you with a live map.

| Example | What you get |
| --- | --- |
| [`docker/`](docker/) | Ritele alone in Docker Compose, ready for your own services |
| [`node/`](node/) | Ritele plus two small Node.js services that call each other, so the map has something to draw |

## The one thing every example does

Ritele receives OTLP on the standard ports, so any OpenTelemetry SDK or Collector can send to it:

| Port | Protocol |
| --- | --- |
| 4317 | OTLP over gRPC |
| 4318 | OTLP over HTTP |
| 8080 | Ritele web UI |

For most SDKs, these environment variables are enough:

```sh
OTEL_SERVICE_NAME=checkout-api              # becomes the box on the map
OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318
OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf
```

Give every service its own `OTEL_SERVICE_NAME`. The free plan maps one environment of up to 20 services; databases, queues, caches and external APIs are drawn too, but don't count.

## Quick start

```sh
git clone https://github.com/ritele-io/examples
cd examples/node
docker compose up --build
```

Open http://localhost:8080 and sign in as `admin`. The first password is printed once in Ritele's log:

```sh
docker compose logs ritele | grep -A3 'Ritele sign-in'
```

The two services and the call between them appear within a minute.

The examples pin `ritele/ritele:0.0.38`, the current release. Newer versions are in the [changelog](https://ritele.io/changelog/).

## More

- [Docs](https://ritele.io/docs/)
- [Guide: OpenTelemetry architecture diagram from traces](https://ritele.io/guides/opentelemetry-architecture-diagram/)
- Questions and issues: [ritele-io/ritele](https://github.com/ritele-io/ritele). This repository has no issue tracker of its own.
