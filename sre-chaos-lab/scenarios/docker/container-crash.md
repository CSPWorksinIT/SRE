
---

# 🔥 12. Example scenario file

### `scenarios/docker/container-crash.md`

```markdown
# Container Crash

## Problem
Container exits immediately

## Break
Added exception in app

## Debug
docker logs <container_id>

## Root Cause
Application crash

## Fix
Removed exception

## Prevention
Add health checks
