# 🔄 On-Demand ISR Revalidation Guide

This guide explains how to instantly update your statically generated pages when your API data changes, without waiting for the 24-hour automatic revalidation.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Setup](#setup)
3. [Usage Examples](#usage-examples)
4. [Integration with Backend](#integration-with-backend)
5. [Webhook Integration](#webhook-integration)
6. [Troubleshooting](#troubleshooting)

---

## 🚀 Quick Start

After updating your backend API, simply call:

```bash
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET_HERE"
```

All pages will refresh on the next visit!

---

## ⚙️ Setup

### Step 1: Add Secret to Environment Variables

Add this to your `.env.local` (for development):

```bash
REVALIDATION_SECRET=your-super-secret-key-here-change-this
```

Add the same to your `.env` (for production) or set it in your hosting platform (Vercel):

**For Vercel:**

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add: `REVALIDATION_SECRET` = `your-super-secret-key-here`
4. Save and redeploy

**Generate a secure secret:**

```bash
# Option 1: Use openssl
openssl rand -base64 32

# Option 2: Use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Option 3: Use a password generator
# Generate a long random string (32+ characters)
```

### Step 2: Verify Setup

Test your endpoint:

```bash
# This should return 401 Unauthorized
curl "https://your-domain.com/api/revalidate"

# This should work (replace YOUR_SECRET)
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET"
```

---

## 📖 Usage Examples

### 1. Revalidate ALL Pages (Recommended)

This revalidates all pages that use the `fetchData()` function:

```bash
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET"
```

**What it does:**

- ✅ Revalidates: Home, Offers, FAQ, Yacht Rentals, Events, etc.
- ✅ All locales (en, ar, ru, zh)
- ✅ All dynamic pages (individual offers, yachts, etc.)

**Response:**

```json
{
  "success": true,
  "revalidated": true,
  "items": ["tag:data-cache (all pages)"],
  "message": "Cache revalidated successfully. Changes will appear on next page visit.",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "note": "Pages will regenerate in the background on the next request"
}
```

---

### 2. Revalidate Specific Tag

```bash
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET&tag=data-cache"
```

Same as option 1, but explicitly specifying the tag.

---

### 3. Revalidate Specific Path

For updating just one page:

```bash
# Revalidate just the offers page (English)
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/offers"

# Revalidate offers page for a specific locale
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/offers&locale=ar"

# Revalidate a specific offer detail page
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/offers/business-council"

# Revalidate FAQ
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/faq"
```

---

## 🔗 Integration with Backend

### Option A: Manual Button in Admin Panel

Add a "Publish Changes" button in your admin panel:

```javascript
// In your admin dashboard
async function publishChanges() {
  try {
    const response = await fetch('https://your-domain.com/api/revalidate?secret=YOUR_SECRET');
    const data = await response.json();

    if (data.success) {
      alert('✅ Changes published successfully! Website will update on next visit.');
    } else {
      alert('❌ Failed to publish: ' + data.message);
    }
  } catch (error) {
    alert('❌ Error: ' + error.message);
  }
}
```

---

### Option B: Automatic After API Updates

Call the revalidation endpoint automatically after updating data:

```javascript
// In your backend API (Node.js example)
async function updateOffer(offerId, data) {
  // 1. Update your database
  await database.offers.update(offerId, data);

  // 2. Trigger revalidation
  try {
    await fetch(`https://your-domain.com/api/revalidate?secret=${process.env.REVALIDATION_SECRET}`);
    console.log('✅ Website cache revalidated');
  } catch (error) {
    console.error('❌ Failed to revalidate:', error);
    // Don't fail the update if revalidation fails
  }

  return { success: true };
}
```

---

### Option C: Scheduled Revalidation

Set up a cron job to revalidate periodically:

```bash
# Add to crontab (revalidate every 6 hours)
0 */6 * * * curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET" > /dev/null 2>&1

# Or every hour
0 * * * * curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET" > /dev/null 2>&1
```

Or use a service like **cron-job.org** or **EasyCron**:

1. Create an account
2. Add URL: `https://your-domain.com/api/revalidate?secret=YOUR_SECRET`
3. Set schedule: Every 6 hours (or as needed)

---

## 🔔 Webhook Integration

### From Your CMS/Backend

Many CMS systems support webhooks. Configure them to call your revalidation endpoint:

**Example: Contentful Webhook**

```
URL: https://your-domain.com/api/revalidate?secret=YOUR_SECRET
Method: POST or GET
Trigger: On content publish/update
```

**Example: Custom Backend Webhook**

```javascript
// Express.js example
app.post('/admin/publish', async (req, res) => {
  // Your update logic
  await updateDatabase(req.body);

  // Trigger Next.js revalidation
  await fetch(`https://your-domain.com/api/revalidate?secret=${process.env.REVALIDATION_SECRET}`, { method: 'POST' });

  res.json({ success: true });
});
```

---

## 🐛 Troubleshooting

### Error: "Invalid or missing secret token"

**Problem:** The secret doesn't match or is missing.

**Solution:**

1. Check your environment variable is set: `REVALIDATION_SECRET`
2. Verify you're passing the correct secret in the URL
3. Restart your server after adding environment variables
4. On Vercel, redeploy after adding environment variables

---

### Changes Don't Appear Immediately

**This is normal!** ISR works in 2 steps:

1. **First visit after revalidation:** Serves old cached page + regenerates in background
2. **Second visit:** Serves fresh regenerated page

**To see changes immediately:**

1. Visit the page once (triggers regeneration)
2. Wait 2-3 seconds
3. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Or open in incognito/private window

---

### Testing Revalidation

Use these steps to verify it's working:

```bash
# 1. Make a change in your backend API

# 2. Call revalidation
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET"

# 3. Check the response
# Should return: {"success": true, "revalidated": true, ...}

# 4. Visit your website
# First visit: Old content + background regeneration
# Wait 2-3 seconds, refresh again
# Second visit: New content appears!
```

---

### Check Logs

In your deployment platform (Vercel):

1. Go to your project
2. Click on "Deployments"
3. Click on your active deployment
4. View "Functions" logs
5. Look for: "✅ Revalidated cache tag: data-cache"

---

## 📊 How It Works

```
┌─────────────────────────────────────────────────────────────┐
│  YOU UPDATE API                                             │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│  Call: /api/revalidate?secret=YOUR_SECRET                   │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│  Next.js marks all pages with 'data-cache' tag as stale    │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│  Next visitor to ANY page triggers regeneration             │
│  - Visitor gets current cached page instantly (fast!)       │
│  - New page generates in background                         │
└────────────┬────────────────────────────────────────────────┘
             │
             ▼
┌─────────────────────────────────────────────────────────────┐
│  Subsequent visitors get the NEW regenerated page           │
│  Your changes are now live! 🎉                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Best Practices

### ✅ DO:

- Use the tag-based approach (revalidates all pages at once)
- Set a strong random secret (32+ characters)
- Store secret in environment variables (never in code)
- Call revalidation after significant data updates
- Use webhooks for automatic revalidation

### ❌ DON'T:

- Don't expose your secret in client-side code
- Don't commit secrets to git
- Don't call revalidation too frequently (rate limit if needed)
- Don't expect instant changes (ISR regenerates on next visit)

---

## 💡 Pro Tips

1. **Combine with 24-hour auto-revalidation:** You get automatic updates daily + instant updates when needed

2. **Use for important updates only:** Most content can wait 24 hours. Use on-demand revalidation for urgent changes.

3. **Monitor usage:** Consider adding rate limiting if you're worried about abuse

4. **Test in development:** Use `console.log` to verify revalidation is being called

5. **Multiple environments:** Use different secrets for staging vs production

---

## 📞 Quick Reference

```bash
# Revalidate everything (most common)
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET"

# Revalidate specific page
curl "https://your-domain.com/api/revalidate?secret=YOUR_SECRET&path=/offers"

# With POST (for webhooks)
curl -X POST "https://your-domain.com/api/revalidate?secret=YOUR_SECRET"

# From JavaScript
fetch('https://your-domain.com/api/revalidate?secret=YOUR_SECRET')
  .then(r => r.json())
  .then(data => console.log(data))
```

---

## 🔐 Security Notes

- ✅ Secret is required for all requests
- ✅ Secret is verified server-side
- ✅ Invalid attempts return 401 Unauthorized
- ✅ No sensitive data in response
- ✅ Endpoint itself is never cached

---

**Need help?** Check the Next.js documentation on [On-Demand Revalidation](https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating)
