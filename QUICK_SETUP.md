# 🚀 Quick Setup for On-Demand Revalidation

## 1. Add to your `.env` or `.env.local`:

```bash
REVALIDATION_SECRET=your-super-secret-key-here-change-this
```

**Generate a secure secret:**

```bash
openssl rand -base64 32
```

## 2. For Production (Vercel):

1. Go to: https://vercel.com/your-project/settings/environment-variables
2. Add new variable:
   - **Key:** `REVALIDATION_SECRET`
   - **Value:** (paste your secure random string)
   - **Environment:** Production (and Preview if desired)
3. **Save** and **Redeploy**

## 3. Test It:

Replace `YOUR_DOMAIN` and `YOUR_SECRET`:

```bash
# Test endpoint exists (should return 401)
curl https://YOUR_DOMAIN.com/api/revalidate

# Test with secret (should return success)
curl "https://YOUR_DOMAIN.com/api/revalidate?secret=YOUR_SECRET"
```

## 4. Use It:

After updating your backend API, call:

```bash
curl "https://YOUR_DOMAIN.com/api/revalidate?secret=YOUR_SECRET"
```

Your website will update on the next page visit!

---

**See [REVALIDATION_GUIDE.md](./REVALIDATION_GUIDE.md) for complete documentation.**
