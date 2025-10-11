# InfraCore Website - Branch-Based Deployment Guide

## 🌿 **Branch Strategy Overview**

This guide explains how to manage your InfraCore website using Git branches for different deployment environments.

## 📋 **Current Branch Setup**

### **Branches:**
- **`master`** - Production branch (your live domain)
- **`development`** - Development branch (preview deployments)

### **Deployment URLs:**
- **Production**: `https://your-domain.com` (master branch)
- **Development**: `https://devops-portfolio-website-development.vercel.app` (development branch)

## 🚀 **How to Use This Setup**

### **1. For Development Work:**
```bash
# Switch to development branch
git checkout development

# Make your changes
# ... edit files ...

# Commit and push to development
git add .
git commit -m "Your development changes"
git push
```

**Result**: Changes deploy to the development URL for preview

### **2. For Production Release:**
```bash
# Switch to master branch
git checkout master

# Merge development changes
git merge development

# Push to production
git push
```

**Result**: Changes deploy to your live domain

## ⚙️ **Vercel Configuration**

### **Current Setup:**
- **Production Domain**: Assigned to `master` branch
- **Preview Deployments**: Available for `development` branch
- **Automatic Deployments**: Enabled for both branches

### **To Unassign Domain from Master:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Domains**
4. Remove the domain from `master` branch
5. Keep it unassigned until ready for production

## 🔄 **Recommended Workflow**

### **Daily Development:**
1. Work on `development` branch
2. Test changes on preview URL
3. Iterate and refine

### **When Ready for Production:**
1. Merge `development` → `master`
2. Assign domain to `master` branch
3. Deploy to production

### **Emergency Fixes:**
1. Make quick fixes on `master`
2. Deploy immediately
3. Sync back to `development`

## 📁 **Branch Management Commands**

```bash
# Create new feature branch
git checkout -b feature/new-feature

# Switch between branches
git checkout master
git checkout development

# Merge development to master
git checkout master
git merge development
git push

# Push development branch
git checkout development
git push
```

## 🎯 **Benefits of This Approach**

✅ **Safe Development**: Test changes without affecting production  
✅ **Preview URLs**: Share development progress with stakeholders  
✅ **Rollback Capability**: Easy to revert if issues arise  
✅ **Professional Workflow**: Industry-standard GitOps approach  
✅ **Domain Control**: Keep production domain private until ready  

## 🔧 **Next Steps**

1. **Unassign Domain**: Remove domain from master branch in Vercel
2. **Test Development**: Push changes to development branch
3. **Preview Changes**: Use development URL for testing
4. **Production Ready**: Assign domain when ready to go live

## 📞 **Support**

If you need help with branch management or deployment:
- Check Vercel dashboard for deployment status
- Use `git status` to check current branch
- Contact: contact@infracore.com

---

**Current Status**: ✅ Development branch created and configured  
**Next Action**: Unassign domain from master branch in Vercel dashboard
